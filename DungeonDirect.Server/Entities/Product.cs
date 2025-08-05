using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace eCommerceApp.Entities;

public class Product
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public string? Description { get; set; }

    public int Price { get; set; } = 0;

    public string? PictureUrl { get; set; }

    public required string Type { get; set; }

    public string? Brand { get; set; }
    public int QuantityInStock { get; set; } = 50;

}