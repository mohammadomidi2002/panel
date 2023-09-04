// import React from 'react'
import logo from "@assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام نکرده اید؟
          <Link to="/login" className="me-2">
            وارد شوید
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input {...register('mobile', {
                  required: 'موبایل الزامی است',
                  minLength : 11,
                  maxLength : 11
                })} className={`form-control form-control-lg ${errors.mobile && "is-invalid"}`} />
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  className="form-control form-control-lg mb-2"
                  type="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  className="form-control form-control-lg mb-2"
                  type="password"
                />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  وارد شوید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;