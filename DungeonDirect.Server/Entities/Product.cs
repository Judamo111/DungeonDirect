using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace eCommerceApp.Entities;

public class Product
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public string? Description { get; set; }

    [Precision(18,2)]
    public decimal Price { get; set; } = 0;

    public required string PictureUrl { get; set; }

    public required string Type { get; set; }

    public required string Brand { get; set; }

    public int QuantityInStock { get; set; }

}