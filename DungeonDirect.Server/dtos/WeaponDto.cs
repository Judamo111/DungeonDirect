namespace DungeonDirect.Server.dtos
{
public class WeaponDto
{
    public required string Name { get; set; }
    public required List<string> Desc { get; set; }
    public string? Weapon_Range { get; set; }
    public CostDto? Cost { get; set; }
    public required Equipment_CategoryDto Equipment_Category { get; set; }
    }
}
