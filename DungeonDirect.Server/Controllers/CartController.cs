
using DungeonDirect.Server.dtos;
using DungeonDirect.Server.Entities;
using DungeonDirect.Server.Extensions;
using eCommerceApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DungeonDirect.Server.Controllers
{
    public class CartController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<CartDto>> GetCart()
        {
            var cart = await RetrieveCart();

            if (cart == null)
            {
                return NoContent();
            }

            return cart.ToDto();


        }

        [HttpPost]
        public async Task<ActionResult<CartDto>> AddItemToCart(int productId, int quantity)
        {
            //get cart
            var cart = await RetrieveCart();

            //create cart
            cart ??= CreateCart();
            //get product
            var product = await context.Products.FindAsync(productId);

            if (product == null)
            {
                return BadRequest("Problem adding item to cart");
            }
            //add item to cart
            cart.AddItem(product, quantity);

            //save changes
            var result = await context.SaveChangesAsync() > 0;

            if (result)
            {
                //basket is the thing returned at the endpoint returned by GetCart
                return CreatedAtAction(nameof(GetCart), cart.ToDto());

            }

            return BadRequest("Problem updating cart");

            }


        [HttpDelete]
        public async Task<ActionResult> RemoveCartItem(int productId, int quantity)
        {
            //get cart
            var cart = await RetrieveCart();
            if (cart == null) return BadRequest("Unable to retrieve cart");
            //remove the item or reduce its quantity
            cart.RemoveItem(productId, quantity);
            //save changes

            return Ok();
        }
        private async Task<Cart?> RetrieveCart()
        {
            return await context.Carts
                .Include(x => x.Items)
                .ThenInclude(x => x.Product)
                .FirstOrDefaultAsync(x => x.CartId == Request.Cookies["cartId"]);
        }

        private Cart CreateCart()
        {
            var cartId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.UtcNow.AddDays(10),
                Secure = true
            };
            Response.Cookies.Append("cartId", cartId, cookieOptions);
            var cart = new Cart { CartId = cartId };
            //tells ef to track the new basket in memory
            context.Carts.Add(cart);
            return cart;
        }
        
    }
}
