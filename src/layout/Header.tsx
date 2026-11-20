import Container from "../features/components/Container";
import Wrapper from "../features/components/Wrapper";
import Box from "../features/components/Box";
import Fondo from "../assets/images/bg-intro-desktop.png";
import { useForm } from "react-hook-form";

function Header() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function Enviar(data) {
    console.log(data);

    reset();
  }

  return (
    <Container
      className="md:min-h-screen h-screen bg-red-400 bg-cover bg-center flex justify-center md:items-center p-10 "
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <Wrapper>
        <Box className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col  w-[300px] md:w-[500px] text-white md:text-left text-center gap-6">
            <h1 className="text-white md:text-5xl text-2xl font-bold ">
              Learn to code by watching others
            </h1>
            <p>
              {" "}
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but undestanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <button className="h-14 md:w-[420px] w-[300px] rounded-lg bg-purple-700 flex flex-col items-center justify-center text-white font-bold shadow-[0_8px_0_0_rgba(0,0,0,0.15)]">
              <span>TRY IT FREE 7 DAYS</span>
              <span className="font-light">then $20/mo.thereafter</span>
            </button>

            <form
              className="flex flex-col md:h-[450px] md:w-[500px] h-[400px] w-[350px] rounded-xl md:gap-4 gap-2 items-center justify-center bg-white"
              onSubmit={handleSubmit(Enviar)}
            >
              <input
                className={` h-14 md:w-[420px] w-[300px] rounded-lg border-2 border-gray-500/50 p-4 ${errors.name ? "border-red-600 text-red-500 " : "border-gray-500"} `}
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs italic text-left pr-2">
                  Name cannot be empty
                </span>
              )}
              <input
                className={` h-14 md:w-[420px] w-[300px] rounded-lg border-2 border-gray-500/50 p-4 ${errors.lastName ? "border-red-600 text-red-500 " : "border-gray-500"} `}
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              <input
                className={` h-14 md:w-[420px] w-[300px] rounded-lg border-2 border-gray-500/50 p-4 ${errors.email ? "border-red-600 text-red-500 " : "border-gray-500"} `}
                type="email"
                placeholder="Email Adress"
                {...register("email", { required: true })}
              />
              <input
                className={` h-14 md:w-[420px] w-[300px] rounded-lg border-2 border-gray-500/50 p-4 ${errors.password ? "border-red-600 text-red-500 " : "border-gray-500"} `}
                type="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 8 })}
              />

              <button className="h-14 md:w-[420px] w-[300px] rounded-lg bg-green-400/70 text-white font-semibold shadow-[0_4px_6px__rgba(0,0,0,0.20)]">
                CLAIM YOUR FREE TRIAL
              </button>
              <p className="font-extralight text-center">
                {" "}
                By clicking the button, you are agreeing to our{" "}
                <span className="font-bold text-red-400">
                  {" "}
                  Terms and Services
                </span>{" "}
              </p>
            </form>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Header;
