


using eCommerceApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace eCommerceApp.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        //using ensures cleanup occurs immediately when no longer in use
        //creates a scope service (a service with a scoped lifetime)
        using var scope = app.Services.CreateScope();


        //gives access to db context
        // ?? tells system what to do if context is Null
        var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
            ?? throw new InvalidOperationException("Failed to retrieve store context"); 

        SeedData(context);
    }

    private static void SeedData(StoreContext context)
    {

        //applies pending migrations to the db at runtime
        context.Database.Migrate();

        //checks wheter rows exist in the product table, if so skips seeding
        if (context.Products.Any()) return;

        var products = new List<Product>
        {
 new Product
            {
                
                Name = "Flamebrand Sword",
                Description = "A longsword imbued with the power of fire.",
                Price = 129.99m,
                PictureUrl = "/images/products/flamebrandsword.png",
                Type = "Weapon",
                Brand = "Emberforge",
                QuantityInStock = 15
            },
            new Product
            {
                
                Name = "Arcane Staff of Wisdom",
                Description = "A staff used by archmages to focus spells.",
                Price = 189.50m,
                PictureUrl = "/images/products/arcanestaffofwisdom.png",
                Type = "Weapon",
                Brand = "MysticWorks",
                QuantityInStock = 8
            },
            new Product
            {
               
                Name = "Shadow Dagger",
                Description = "A cursed blade that whispers to its wielder.",
                Price = 89.75m,
                PictureUrl = "/images/products/shadowdagger.png",
                Type = "Weapon",
                Brand = "Darksteel",
                QuantityInStock = 20
            },
            new Product
            {
               
                Name = "Elven Longbow",
                Description = "Crafted from sacred yew by woodland elves.",
                Price = 149.00m,
                PictureUrl = "/images/products/elvenlongbow.png",
                Type = "Weapon",
                Brand = "Sylvangrove",
                QuantityInStock = 10
            },
            new Product
            {
              
                Name = "Potion of Greater Healing",
                Description = "Restores 100 HP when consumed.",
                Price = 29.99m,
                PictureUrl = "/images/products/potionofgreaterhealing.png",
                Type = "Consumable",
                Brand = "Alchemist's Guild",
                QuantityInStock = 50
            },
            new Product
            {
                
                Name = "Dragonhide Armor",
                Description = "Tough leather armor made from dragon scales.",
                Price = 249.99m,
                PictureUrl = "/images/products/dragonhidearmor.png",
                Type = "Armor",
                Brand = "Drakeforge",
                QuantityInStock = 5
            },
            new Product
            {
                
                Name = "Ring of Invisibility",
                Description = "Grants temporary invisibility to the wearer.",
                Price = 399.95m,
                PictureUrl = "/images/products/ringofinvisibility.png",
                Type = "Accessory",
                Brand = "Whisperforge",
                QuantityInStock = 2
            },
            new Product
            {
                
                Name = "Scroll of Fireball",
                Description = "Unleash a devastating fireball on your enemies.",
                Price = 44.99m,
                PictureUrl = "/images/products/scrolloffireball.png",
                Type = "Consumable",
                Brand = "Scriptorium Arcanum",
                QuantityInStock = 25
            },
            new Product
            {
                
                Name = "Shield of the Guardian",
                Description = "A blessed shield that protects against dark magic.",
                Price = 179.00m,
                PictureUrl = "/images/products/shieldoftheguardian.png",
                Type = "Armor",
                Brand = "Aegiscraft",
                QuantityInStock = 7
            },
            new Product
            {
                
                Name = "Boots of Swiftness",
                Description = "Increases movement speed of the wearer.",
                Price = 99.00m,
                PictureUrl = "/images/products/bootsofswiftness.png",
                Type = "Armor",
                Brand = "Fleetstep",
                QuantityInStock = 12
            }
        };


        //adds all products to the EF Context
        context.Products.AddRange(products);

        context.SaveChanges();
    }
}
