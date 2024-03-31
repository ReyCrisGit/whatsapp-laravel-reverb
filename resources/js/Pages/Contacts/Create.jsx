import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from '@inertiajs/react';

export default function Create({ auth }) {

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        alias: '',
        phone_code: '',
    });

    const createContact = (event) => {
        event.preventDefault();
        console.log('CREAR PRODUCTO');
        // console.log(data);
        post(route('contacts.store'), {
            onSuccess: reset,
            onError: (error) => {
                console.log('Error al guardar la  información');
            }
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <header className="bg-white dark:bg-verde-bg shadow">
                <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">Crear Nuevo Contactos</h2>
                    <a href={route('contacts.index')} className="dark:text-white dark:hover:bg-verde-bg-web/50 dark:active:bg-verde-bg-web -m-2 p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>

                    </a>
                </div>
            </header>

            <div class="flex justify-center mt-10">
                <form onSubmit={ createContact }>
                    <div>
                        <InputLabel value="Nombre"></InputLabel>
                        <TextInput 
                            id="alias" 
                            name="alias" 
                            type="text"
                            value={data.alias}
                            onChange={(e) => setData('alias', e.target.value)}
                        >
                        </TextInput>
                    </div>
                    <div>
                        <InputLabel value="Telefono"></InputLabel>
                        <TextInput 
                            id="phone_code"
                            name="phone_code"
                            type="text"
                            value={data.phone_code}
                            onChange={(e) => setData('phone_code', e.target.value)}
                        >
                        </TextInput>
                    </div>
                    <div class="flex justify-center mt-4">
                        <PrimaryButton>Guardar</PrimaryButton>
                    </div>
                </form>
            </div>



        </AuthenticatedLayout>
    )

}