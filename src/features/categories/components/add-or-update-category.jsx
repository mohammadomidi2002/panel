import { useForm } from "react-hook-form";
import { httpInterceptedService } from "@core/https-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AddOrUpdateCategory = ({ setShowAddCategory }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const onSubmit = (data) => {
    setShowAddCategory(false)
    const response = httpInterceptedService.post(`/CourseCategory/`,data);
    toast.promise(
      // pass promise (response is promise)
      response,
      {
        pending: "در حال ذخیره اطلاعات ...",
        success: {
          render() {
            // After getting the status of 200, I have to make the page update (loader run again)
            const url = new URL(window.location.href);
            // window.location.href = the current address
            navigate(url.pathname + url.search);
            // pathname = domain & search = quary string
            return 'عملیات با موفقیت انجام شد'
          }
        },
        error: {
          render({data}) {
            if (data.response.data.status === 400) {
              return t('categoryList.' + data.response.data.code)
            } else {
              return "خطا در اجرای عملیات"
            }
          }
        }
      },
      {
        position: toast.POSITION.BOTTOM_LEFT,
      }
    )
  }
  return (
    <div className="card">
      <div className="card-body">
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-lable">نام</label>
            <input className={`form-control form-control-lg ${errors.name && 'is-invalid'}`}
              {...register('name', { required: true })} />
            {errors.name && errors.name.type === 'required' && (
              <p className="text-danger small fw-bolder  mt-1">نام الزامی است</p>
            )}
          </div>
          <div className="text-start mt-3">
            <button
             type="button"
             className="btn btn-lg btn-secondary ms-2"
             onClick={() => { setShowAddCategory(false)}}>
              بستن
             </button>
            <button
             type="submit"
             className="btn btn-lg btn-primary ms-2">
              ثبت تغییرات
             </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddOrUpdateCategory
