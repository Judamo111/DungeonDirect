using DungeonDirect.Server.Entities;
using eCommerceApp.Entities;
using Microsoft.EntityFrameworkCore;
using System;



namespace eCommerceApp.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{

    public required DbSet<Product> Products {  get; set; }

    public required DbSet<Cart> Carts {  get; set; }

} 