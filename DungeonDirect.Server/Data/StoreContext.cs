using eCommerceApp.Entities;
using Microsoft.EntityFrameworkCore;
using System;



namespace eCommerceApp.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{

    public required DbSet<Product> Products {  get; set; }

}