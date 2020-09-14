class RouteItem {
    // prettier-ignore
    constructor(
        name,
        icon = null,
        path = null,
        children = []
    ) {
        this.name = name;
        this.icon = icon;
        this.path = path;
        this.children = children;
    }
}

export default RouteItem;
