using eCommerceApp.Entities;

namespace DungeonDirect.Server.Entities
{
    public class Cart
    {
        public int Id { get; set; }

        //cartid will be stored in cookie data (therefore string)
        public string CartId { get; set; }
        public List<CartItem> Items { get; set; } = [];

        public void AddItem(Product product, int quantity)
        {
            if (product == null) ArgumentNullException.ThrowIfNull(product);
            if (quantity <= 0) throw new ArgumentOutOfRangeException(nameof(quantity));

            var existingItem = FindItem(product.Id);

            if (existingItem == null)
            {
                Items.Add(new CartItem()
                {
                    Product = product,
                    Quantity = quantity
                });
            }
            else
            {
                existingItem.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId, int quantity)
        {
            if (quantity <= 0) throw new ArgumentException("Quantity should be greater than zero", nameof(quantity));

            var item = FindItem(productId);
            if (item == null) return;

            if (item.Quantity > quantity)
            {
                item.Quantity -= quantity;
            }
            else
            {
                Items.Remove(item);
            }
        }

        private CartItem FindItem(int productId)
        {
            return Items.FirstOrDefault(item => item.ProductId == productId);
        }
    }
}