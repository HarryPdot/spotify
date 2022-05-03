import useAuth from '../useAuth/useAuth'

export default function DashBoard(props: { code: any }) {
    const accessToken = useAuth(props.code)
    return (
        <div>
            {props.code}
        </div>
    )
}