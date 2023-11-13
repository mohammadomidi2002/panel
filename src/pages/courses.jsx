import { httpInterceptedService } from "@core/https-service"

const Courses = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">
            افزودن دوره جدید
          </a>
        </div>
      </div>
    </div>
  )
}

export async function coursesLoder() {
  const response = await httpInterceptedService.get('/Course/list');
  return (response.data)
}

export default Courses
