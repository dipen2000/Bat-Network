import "./Login.css";
import { useState } from "react";
import { BatNetworkContainer } from "../../../../Components/Wrapper/BatNetworkContainer";
import { InputField, PasswordField } from "../../../../Components/InputFields";
import { ButtonPrimary } from "../../../../Components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../../authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [inputData, setInputData] = useState({
    input: {},
    hide: { pwd: true },
    error: "",
  });

  const guestLoginCredentials = {
    username: "the_dark_knight",
    password: "batman123",
  };

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
      hide: { pwd: !prevData.hide.pwd },
    }));
  };

  return (
    <BatNetworkContainer>
      <section className="flex-row justify-center-flex login-page-container">
        <div className="login-section">
          <div className="flex-row justify-center-flex">
            <h2 className="auth-form-title">Login</h2>
          </div>
          <div className="flex-row justify-center-flex">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(loginHandler({ inputData, setInputData }));
              }}
            >
              <div className="flex-col gap-1">
                <InputField
                  type={"text"}
                  fieldTitle={"Username"}
                  name={"username"}
                  fieldPlaceholder={"Enter your username"}
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
                <div className="flex-col">
                  <div className="flex-row justify-center-flex">
                    <ButtonPrimary>Login</ButtonPrimary>
                  </div>
                  <div className="flex-row justify-center-flex">
                    <span>or</span>
                  </div>
                  <div className="flex-row justify-center-flex">
                    <ButtonPrimary
                      onClick={() => {
                        setInputData((prevData) => ({
                          ...prevData,
                          input: guestLoginCredentials,
                        }));
                      }}
                    >
                      Guest Login
                    </ButtonPrimary>
                  </div>
                </div>
                <div className="flex-row gap-1">
                  <span>New to SHOEDOG?</span>
                  <Link to="/signup" className="curs-point">
                    Signup
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

export { Login };
