import { useState, useEffect } from "react";
import { API } from "../../config/server";
import useFetch from "../../hooks/useFetch";
import DefaultAlert from "../../components/alerts/DefaultAlert";
import AlertLink from "../../components/alerts/AlertLink";
import { InputText } from "../../components/Inputs";
import { Form, Button } from "react-bootstrap";

const CreateTripForm = () => {

    const url = `${API}/trip/create`;
    const [response, loading, doFetch] = useFetch();

    const [nameValue, setNameValue] = useState();
    const [dateValue, setDateValue] = useState();
    const [timeValue, setTimeValue] = useState();
    const [locationValue, setLocationValue] = useState();
    const [durationValue, setDurationValue] = useState();
    const [packingListValue, setPackingListValue] = useState();

    const valuesFilled = nameValue &&
        dateValue &&
        timeValue &&
        locationValue &&
        durationValue &&
        packingListValue;

    useEffect(() => {
        if (response) console.log({ response });

    }, [response]);

    function submit(e) {
        if (valuesFilled) doFetch("POST", url, {
            name: nameValue,
            dateTime: dateValue + " " + timeValue,
            location: locationValue,
            duration: durationValue,
            packingList: packingListValue
        });
        e.preventDefault();
    }

    if (response) return (
        <DefaultAlert
            header={`Successfully created trip: ${nameValue}!`}
            variant="success">
            <AlertLink url="/createtrip" >create new trip</AlertLink>
        </DefaultAlert>
    );

    return (
        <>
            <Form className="m-4" onSubmit={submit}>
                <InputText label="Trip name" placeholder="Rude Hiking" onChange={setNameValue} />
                <InputText label="Date" placeholder="yyyy-mm-dd" onChange={setDateValue} />
                <InputText label="Time" placeholder="hh:mm" onChange={setTimeValue} />
                <InputText label="Location" placeholder="Rude Skov, Holte, Copenhagen, Denmark" onChange={setLocationValue} />
                <InputText label="Duration" placeholder="hh:mm" onChange={setDurationValue} />
                <InputText label="Packing list" placeholder="tent, extra socks, water" onChange={setPackingListValue} />
                <Button className="d-block mt-4" type="submit" size="lg" disabled={loading || !valuesFilled}>Submit</Button>
            </Form>
        </>
    );

}

export default CreateTripForm;