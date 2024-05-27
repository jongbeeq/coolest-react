import InputRow from "../../components/InputRow";
import useCreateProduct from "../../hooks/use-createProduct";

export default function InputProductDetail() {
    const { createProductRows, register, errors } = useCreateProduct()

    return (
        <div className="flex flex-col">
            {createProductRows.map(row =>
                <InputRow className={row.className} register={register} key={row.name} name={row.name} title={row.title} type={row.type} validateCondition={row.validateCondition} error={errors[row.name]?.message} info={row.info} otherAttributes={row.otherAttributes} />
            )}
        </div>
    )
}
