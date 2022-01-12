import { isBootstrapVariant } from "../../config/bootstrapVariants";
import { Alert } from "react-bootstrap";

function HttpAlert({ error, onDismiss, variant }) {
    const validVariant = isBootstrapVariant(variant) ? variant : "danger";
    return error &&
        <Alert
            className="mx-2 mt-2 mb-5"
            key={error} variant={validVariant}
            dismissible
            onClose={() => onDismiss()}>
            <Alert.Heading>{error.code}</Alert.Heading>
            {error.message}
        </Alert>;

}

export default HttpAlert;