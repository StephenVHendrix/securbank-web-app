const Service = () => {
    return (
        <div className="card-horizontal hover-effect service-card-wrapper" data-aue-resource="urn:aemconnection:/content/dam/securbank/services/estate-planning-consultation/jcr:content/data/master" data-aue-type="reference" data-aue-label="Service (Estate Planning Consultation)">
            <div className="right-wrapper">
                <div className="content-wrapper">
                    <p className="category color-blue font-size-small font-weight-medium">Investment Services</p>
                    <h5 className="color-dark" data-aue-prop="title" data-aue-type="text" data-aue-label="Title">Estate Planning Consultation</h5>
                    <div data-aue-prop="description" data-aue-label="Description" data-aue-type="text" className="font-size-large">Plan for the future by discussing estate planning strategies with our experts to ensure your assets are protected.</div>
                </div>
            </div>
        </div>
    );
};

export default Service;