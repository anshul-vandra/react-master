import { IUser } from "Types/Entity/UserEntity";

interface IPropExample {
    firstName: string;
    age: number;
    friends: IUser[];
}

const index = (props: IPropExample) => {

    const { firstName, age, friends } = props

    return (
        <div>
            {`${firstName} has ${friends.length} friends at ${age} age`}
        </div>
    )
}

export default index