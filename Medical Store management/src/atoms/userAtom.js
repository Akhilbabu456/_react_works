import { atom } from "recoil"

const userAtom = atom ({
    key: "userAtom",
    default: localStorage.getItem("token")
})

export default userAtom