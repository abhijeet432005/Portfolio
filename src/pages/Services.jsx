import DetailService from "../components/Services/DetailService"
import ServiceSummary from "../components/Services/ServiceSummary"

const Services = () => {

  return (
    <div className="w-full min-h-screen">
      <ServiceSummary />
      <DetailService />
    </div>
  )
}

export default Services