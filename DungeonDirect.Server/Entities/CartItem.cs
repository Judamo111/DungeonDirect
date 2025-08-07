using eCommerceApp.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace DungeonDirect.Server.Entities
{
    [Table("CartItems")]
    public class CartItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        //navigation properties
        public int ProductId { get; set; }
        public required Product Product { get; set; } = null!;

        public int CartId { get; set; }

        public Cart Cart { get; set; } = null!;
    }
}