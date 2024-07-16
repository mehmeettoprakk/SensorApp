import { Button, Col, InputField, Row, getItem, setItem } from "@/components";
import { themesSetting } from "@/recoil";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { withRouter } from "next/router";
import { adam_var_mi } from "../../lib/db";
import { useRouter } from "next/router";

const defaultValue = {
  username: "",
  password: "",
};

const Login = (props: any) => {
  const router = useRouter();

  const setTheme = useSetRecoilState(themesSetting);
  useEffect(() => {
    if (getItem("userdata").loggedIn !== undefined) {
      props.router.push("/dashboard");
    }
    setTheme({
      header: false,
      sidebar: false,
      footer: false,
      content: true,
    });
    return () => {
      setTheme({
        header: true,
        sidebar: true,
        footer: true,
        content: true,
      });
    };
  }, [props.router, setTheme]);
  const {
    register,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValue,
  });

  const [eposta, epostaDegistir] = useState("sdfg");
  const [sifre, sifreDegistir] = useState("wret");
  const [password, setPassword] = useState(true);

  function handleEPostaChange(e: any) {
    epostaDegistir(e.target.value);
    //console.log("Yeni Eposta : " + eposta)
  }

  function handleSifreChange(e: any) {
    sifreDegistir(e.target.value);
    //console.log("Yeni Eposta : " + eposta)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const varmiURL = `http://localhost:3000/api/kullanici/?eposta=${eposta}&sifre=${sifre}`;

    try {
      // console.log('MEHMET TOPRAK');
      // await fetch(varmiURL);
      // console.log('MEHMET TOPRAK');
      var resp = await fetch(varmiURL);
      console.log(resp);
      if (resp.status === 200) {
        // await router.push('/About').then(() => {
        //   console.log('Navigation complete!');
        // });
        // Response.redirect(new URL('http://localhost:3000/dashboard'));

        props.router.push("/dashboard");
        setItem("userdata", {
          loggedIn: true,
        });
        console.log("girildi");
      }
    } catch (error) {
      console.log("Hata : " + error);
    }

    // async function fetchKullaniciVarMiJSON() {
    //   const response = await fetch(varmiURL);
    //   const movies = await response.json();
    //   return movies;
    // }

    // fetchKullaniciVarMiJSON().then(sonuc => {
    //   console.log("Geri DÃ¶nen : " + JSON.stringify(sonuc)); // fetched movies
    // });

    // var a = await adam_var_mi(eposta,sifre);

    // console.log(a);

    // adam_var_mi()
  };

  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>ADMIN LTE </b>APP
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <p className="login-box-msg">Sign in to start your session</p>
            <InputField
              label="Username"
              name="username"
              type="text"
              onChange={handleEPostaChange}
              value={eposta}
              iconFormGroup="fas fa-envelope"
              formGroup
            />
            <InputField
              label="Password"
              name="password"
              type="text"
              value={sifre}
              onChange={handleSifreChange}
              register={register("password")}
              placeholder="Silahkan Masukan Password"
              iconFormGroup={password ? "fas fa-eye-slash" : "fas fa-eye"}
              customeCss={password ? "password-hide-css" : ""}
              btnAction={() => setPassword(!password)}
              formGroup
              errors={errors?.password}
            />
            <Row>
              <Col size="12">
                <Button
                  loading
                  disabled={!isDirty || !isValid}
                  textLoading="Waiting"
                  type="submit"
                  color="primary"
                  block
                  title="Sign In"
                />
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
