using DungeonDirect.Server.dtos;
using DungeonDirect.Server.Entities;

namespace DungeonDirect.Server.Extensions
{
    public static class CartExtensions
    {
        public static CartDto ToDto(this Cart cart)
        {
            return new CartDto
            {
                CartId = cart.CartId,
                Items = cart.Items.Select(x => new CartItemDto
                {
                    ProductId = x.ProductId,
                    Name = x.Product.Name,
                    Price = (int)x.Product.Price,
                    Brand = x.Product.Brand,
                    Type = x.Product.Type,
                    Category = x.Product.Category,
                    PictureUrl = x.Product.PictureUrl,
                    Quantity = x.Quantity
                }).ToList()
            };
        }
    }
}
