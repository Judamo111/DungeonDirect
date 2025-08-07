using eCommerceApp.Data;
using System.Net.Http;

namespace DungeonDirect.Server.Data.seeders
{
    public class DbSeeder(HttpClient httpClient, StoreContext context)
    {
        public async Task SeedAllAsync()
        {
            var weaponSeeder = new WeaponSeeder(httpClient, context);
            var armorSeeder = new ArmorSeeder(httpClient, context);

            await weaponSeeder.SeedWeaponsAsync();
            await armorSeeder.SeedArmorAsync();
        }
    }
}
