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
        //fk
        public int ProductId { get; set; }
        public required Product Product { get; set; } = null!;
        //fk
        public int CartId { get; set; }

        public Cart Cart { get; set; } = null!;
    }
}