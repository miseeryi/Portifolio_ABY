type TUser = {
    name: string;
    umur: number;
    createdAt: Date;

}

type TStatusVehicle = "New" | "Used" | "Broken"

interface IVehicle {
    id: string | number;
    name: string;
    description?: string;
    isFavorite: boolean;
    status: TStatusVehicle;
    photoURL?: "LINK"
}


interface ILambo extends IVehicle {
    message: string
}

const dataLambo: ILambo = {
    id: 1,
    name: 'supra',
    isFavorite: false,
    status: "New",
    message: "Hello teman"
}

interface IVehicleToken extends Omit<IVehicle, "id" > {
    id: Object
}

// aku perbaiki master nya

