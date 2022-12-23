export declare class UsersEntity {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    hashPassword(): void;
    password: string;
    roles: string;
    isActive: number;
    isLogin: number;
    isVerified: number;
}
