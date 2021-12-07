import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

const signIn = ({ providers }) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center w-[80vw] md:w-[50vw] mx-auto justify-center min-h-screen py-2 px-10 -mt-10 text-center my-7">
        <img
          src="https://logo.clearbit.com/instagram.com"
          alt="instagram icon"
        />
        <p className="text-xs italic">
          Ta aplikacja stworzona została w calach edukacyjnych. Nie jest to
          prawdziwa aplikacja.
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-4 bg-blue-500 rounded-full text-white"
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
