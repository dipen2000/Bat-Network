import "./Signup.css";
import { BatNetworkContainer } from "../../../../Components/Wrapper/BatNetworkContainer";
import { InputField, PasswordField } from "../../../../Components/InputFields";
import { ButtonPrimary } from "../../../../Components/Buttons";
import { signupHandler } from "../../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [inputData, setInputData] = useState({
    input: {},
    hide: { pwd: true, confPwd: true },
    error: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      input: { ...prevData.input, [name]: value },
    }));
  };

  const showHidePasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { ...prevData.hide, pwd: !prevData.hide.pwd },
    }));
  };

  const showHideConfirmPasswordHandler = () => {
    setInputData((prevData) => ({
      ...prevData,
      hide: { ...prevData.hide, confPwd: !prevData.hide.confPwd },
    }));
  };
  return (
    <BatNetworkContainer>
      <section className="flex-row justify-center-flex signup-page-container">
        <div className="signup-section">
          <div className="flex-row justify-center-flex">
            <h2 className="auth-form-title">Signup</h2>
          </div>
          <div className="flex-row justify-center-flex">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(signupHandler({ inputData, setInputData }));
              }}
            >
              <div className="flex-col gap-1">
                <InputField
                  type={"text"}
                  fieldTitle={"Name"}
                  name={"fullName"}
                  fieldPlaceholder={"Enter your name."}
                  onChange={inputChangeHandler}
                  value={inputData.input.fullName}
                  required={true}
                />
                <InputField
                  type={"text"}
                  fieldTitle={"Username"}
                  name={"username"}
                  fieldPlaceholder={"Enter your username."}
                  onChange={inputChangeHandler}
                  value={inputData.input.username}
                  required={true}
                />
                <PasswordField
                  type={inputData.hide.pwd ? "password" : "text"}
                  fieldTitle={"Password"}
                  name={"password"}
                  fieldPlaceholder={"Enter your Password."}
                  onChange={inputChangeHandler}
                  value={inputData.input.password}
                  required={true}
                >
                  <div className="curs-point" onClick={showHidePasswordHandler}>
                    <i
                      className={`fa-solid ${
                        inputData.hide.pwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <PasswordField
                  type={inputData.hide.confPwd ? "password" : "text"}
                  fieldTitle={"Confirm Password"}
                  name={"confirmPassword"}
                  fieldPlaceholder={"Enter your Password again"}
                  onChange={inputChangeHandler}
                  value={inputData.input.confirmPassword}
                  required={true}
                >
                  <div
                    className="curs-point"
                    onClick={showHideConfirmPasswordHandler}
                  >
                    <i
                      className={`fa-solid ${
                        inputData.hide.confPwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                    ></i>
                  </div>
                </PasswordField>
                <div className="flex-row justify-center-flex">
                  <div>
                    <ButtonPrimary>Signup</ButtonPrimary>
                  </div>
                </div>
                {true &&
                  !(
                    inputData.input.password === inputData.input.confirmPassword
                  ) && <p>The passwords you entered does not match.</p>}
                <div className="flex-row gap-1">
                  <span>New to SHOEDOG?</span>
                  <Link className="curs-point" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="flex-row justify-center-flex">
            {inputData.error && (
              <div style={{ color: "red" }}>{inputData.error}</div>
            )}
          </div>
          <div className="flex-row justify-center-flex">
            {isLoading && <div>Loading...</div>}
          </div>
        </div>
      </section>
    </BatNetworkContainer>
  );
};

export { Signup };
