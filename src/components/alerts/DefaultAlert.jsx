import { isBootstrapVariant } from "../../config/bootstrapVariants";
import { Alert } from "react-bootstrap";

function DefaultAlert({ header, variant, children }) {
    const verifiedVariant = isBootstrapVariant(variant) ? variant : "danger";
    return <Alert
        className="mx-2 mt-2 mb-5"
        key={header}
        variant={verifiedVariant}>
        {header && <Alert.Heading>{header}</Alert.Heading>}
        {children}
    </Alert>;

}

export default DefaultAlert;