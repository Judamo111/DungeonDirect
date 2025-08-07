using DungeonDirect.Server.dtos;
using eCommerceApp.Data;
using eCommerceApp.Entities;

namespace DungeonDirect.Server.Data.seeders
{
    public class ArmorSeeder(HttpClient httpClient, StoreContext context)
    {
        // This class will be used to seed armor data from an external API
        // Similar to WeaponSeeder, but tailored for armor items
        // Implement the seeding logic here
        public async Task SeedArmorAsync()
        {
                // Fetch armor data from the API and seed it into the context
                // Example: var response = await httpClient.GetFromJsonAsync<ArmorDto>("https://api.example.com/armor");
                // Process the response and add armor items to the context
                // await context.SaveChangesAsync();

                var listResponse = await httpClient.GetFromJsonAsync<ApiListResponse>("https://www.dnd5eapi.co/api/equipment-categories/armor");
                if (listResponse == null || listResponse.Equipment == null) return;

                foreach (var item in listResponse.Equipment)
            {
                var detail = await httpClient.GetFromJsonAsync<ArmorDto>($"https://www.dnd5eapi.co{item.Url}");
                if (detail == null) continue;

                var product = new Product
                {
                    Name = detail.Name,
                    Description = detail.Desc != null ? string.Join("\n", detail.Desc) : null,
                    Price = detail.Cost?.Quantity,
                    Type = detail.Armor_Category ?? "Unknown",
                    Category = detail.Equipment_Category.Name ?? "Armor",
                    Brand = "D&D SRD",
                    PictureUrl = $"/images/products/{detail.Name}"
                };

                await Task.Delay(500);
            }
                await context.SaveChangesAsync();
        }

        public class ApiListResponse
        {
            public required List<EquipmentItem> Equipment { get; set; }
        }

        public class EquipmentItem
        {
            public required string Name { get; set; }
            public required string Url { get; set; }
        }
    }
}
