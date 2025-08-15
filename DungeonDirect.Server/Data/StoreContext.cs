using DungeonDirect.Server.Entities;
using eCommerceApp.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;



namespace eCommerceApp.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{

    public required DbSet<Product> Products {  get; set; }

    public required DbSet<Cart> Carts {  get; set; }

    //roles
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
            .HasData(
                new IdentityRole { Id = "f64c99b7-9bde-4c39-8f1c-b9e5349b1148", Name = "Member", NormalizedName = "MEMBER" },
                new IdentityRole { Id = "2082dbca-dedb-44e9-8447-fc063124c851", Name = "Admin", NormalizedName = "ADMIN" }
                );
    }

}