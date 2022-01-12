const bootstrapVariants = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
];

const isBootstrapVariant = (variant) => bootstrapVariants.includes(variant);

export { bootstrapVariants, isBootstrapVariant };