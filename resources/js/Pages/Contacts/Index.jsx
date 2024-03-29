import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from "@inertiajs/react";

export default function Index ({ auth }){

    const { contacts } = usePage().props;


    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contactos</h2>}
        >

            <h1 className="dark:text-gray-200">LISTA DE CONTACTOS</h1>
            <table>
                <thead>
                    <tr className="dark:text-white">
                        <th>Contactos</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) => (
                        <tr className="dark:text-gray-200">
                            <td>{ contact.alias }</td>
                            <td>{ contact.phone_code }</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </AuthenticatedLayout>
    )



}