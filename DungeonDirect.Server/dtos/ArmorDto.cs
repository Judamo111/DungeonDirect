namespace DungeonDirect.Server.dtos
{
    public class ArmorDto
    {
        public required string Name { get; set; }
        public required List<string> Desc { get; set; }
        public string? Armor_Category { get; set; }
        public CostDto Cost { get; set; }
        public required Equipment_CategoryDto Equipment_Category { get; set; }
    }
}
