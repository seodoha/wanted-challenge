import { Link, useNavigate } from "react-router-dom";

function Home() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <form>
                <input type="text" placeholder="아이디 입력" />
                <input type="password" placeholder="패스워드 입력" />
                <input type="submit" value="로그인" />
                <Link
                    to={"/signUp"}
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "12px",
                        padding: "3px",
                        border: "1px solid black",
                        background: "tomato",
                    }}
                >
                    회원가입
                </Link>
            </form>
        </div>
    );
}

export default Home;
