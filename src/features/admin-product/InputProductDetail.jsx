import InputRow from "../../components/InputRow";
import useCreateProduct from "../../hooks/use-createProduct";

export default function InputProductDetail() {
    const { createProductRows, register, errors } = useCreateProduct()

    return (
        <>
            {createProductRows.map(row => <InputRow register={register} key={row.name} name={row.name} title={row.title} type={row.type} validateCondition={row.validateCondition} error={errors[row.name]?.message} info={row.info} />)}
        </>
    )
}
