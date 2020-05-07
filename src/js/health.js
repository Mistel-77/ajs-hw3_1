export default function showHealth(units) {
    if (units.health > 50) {
        return 'healthy';
    };
    if (units.health <= 50 && units.health > 15) {
        return 'wounded';
    };
    if (units.health <= 15 && units.health > 0) {
        return 'critical';
    }
    return 'killed';
};