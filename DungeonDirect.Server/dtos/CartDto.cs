using DungeonDirect.Server.Entities;
using eCommerceApp.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace DungeonDirect.Server.dtos
{
    public class CartDto
    {
        public int Id { get; set; }

        //cartid will be stored in cookie data (therefore string)
        public string CartId { get; set; }
        public List<CartItemDto> Items { get; set; } = [];
    }

    public class CartItemDto
    {

        public int ProductId { get; set; }
        public required string Name { get; set; }
        public int Price { get; set; }
        public required string PictureUrl { get; set; }
        public required string Category {  get; set; }
        public required string Brand { get; set; }
        public required string Type { get; set; }
        public int Quantity { get; set; }


    }
}

