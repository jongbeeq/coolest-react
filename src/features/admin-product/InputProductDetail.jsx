import InputRow from "../../components/InputRow";
import useCreateProduct from "../../hooks/use-createProduct";

export default function InputProductDetail() {
    const { titleRow, balanceRow, priceRow, descriptioneRow, register, errors } = useCreateProduct()

    return (
        <div className="flex flex-col gap-2">
            <InputRow className={titleRow.className} borderColor={titleRow.borderColor} register={register} key={titleRow.name} name={titleRow.name} title={titleRow.title} type={titleRow.type} validateCondition={titleRow.validateCondition} error={errors[titleRow.name]?.message} info={titleRow.info} otherAttributes={titleRow.otherAttributes} />
            <div className="flex justify-between gap-[10%]">
                <InputRow className={balanceRow.className} borderColor={balanceRow.borderColor} register={register} key={balanceRow.name} name={balanceRow.name} title={balanceRow.title} type={balanceRow.type} validateCondition={balanceRow.validateCondition} error={errors[balanceRow.name]?.message} info={balanceRow.info} otherAttributes={balanceRow.otherAttributes} />
                <InputRow className={priceRow.className} borderColor={priceRow.borderColor} register={register} key={priceRow.name} name={priceRow.name} title={priceRow.title} type={priceRow.type} validateCondition={priceRow.validateCondition} error={errors[priceRow.name]?.message} info={priceRow.info} otherAttributes={priceRow.otherAttributes} />
            </div>
            <InputRow className={descriptioneRow.className} borderColor={descriptioneRow.borderColor} register={register} key={descriptioneRow.name} name={descriptioneRow.name} title={descriptioneRow.title} type={descriptioneRow.type} validateCondition={descriptioneRow.validateCondition} error={errors[descriptioneRow.name]?.message} info={descriptioneRow.info} otherAttributes={descriptioneRow.otherAttributes} />
        </div>
    )
}
