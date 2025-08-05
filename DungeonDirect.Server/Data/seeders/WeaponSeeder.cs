using DungeonDirect.Server.dtos;
using eCommerceApp.Data;
using eCommerceApp.Entities;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;

namespace DungeonDirect.Server.Data.seeders
{
    public class WeaponSeeder(HttpClient httpClient, StoreContext context)
    {
        public async Task SeedWeaponsAsync()
        {
            var listResponse = await httpClient.GetFromJsonAsync<ApiListResponse>("https://www.dnd5eapi.co/api/equipment-categories/weapons");
            if (listResponse == null || listResponse.Equipment == null) return;

            foreach (var item in listResponse.Equipment)
            {
                var detail = await httpClient.GetFromJsonAsync<WeaponDto>($"https://www.dnd5eapi.co{item.Url}");
                if (detail == null) continue;

                var product = new Product
                {
                    Name = detail.Name,
                    Description = detail.Desc != null ? string.Join("\n", detail.Desc) : null,
                    Price = detail.Cost.Quantity,
                    Type = detail.Weapon_Range ?? "Unknown",
                    Category = detail.Equipment_Category.Name ?? "Weapon",
                    Brand = "D&D SRD",
                    PictureUrl = $"/images/products/{detail.Name}"  // Optional: add placeholder if needed
                };

                if (!context.Products.Any(p => p.Name == product.Name))
                {
                    context.Products.Add(product);
                }
            }

            await context.SaveChangesAsync();
        }

        private class ApiListResponse
        {
            public required List<EquipmentItem> Equipment { get; set; }
        }

        private class EquipmentItem
        {
            public required string Name { get; set; }
            public required string Url { get; set; }
        }
    }



}
