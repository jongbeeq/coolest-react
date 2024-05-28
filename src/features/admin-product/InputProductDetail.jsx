import InputRow from "../../components/InputRow";
import TextDetail from "../../components/TextDetail";
import useCreateProduct from "../../hooks/use-createProduct";

export default function InputProductDetail() {
    const { titleRow, balanceRow, priceRow, descriptioneRow, register, errors } = useCreateProduct()

    return (
        <div className="flex flex-col gap-2">
            <InputRow className={titleRow.className} register={register} key={titleRow.name} name={titleRow.name} title={titleRow.title} type={titleRow.type} validateCondition={titleRow.validateCondition} error={errors[titleRow.name]?.message} info={titleRow.info} otherAttributes={titleRow.otherAttributes} />
            <div className="flex justify-between gap-[10%]">
                <InputRow className={balanceRow.className} register={register} key={balanceRow.name} name={balanceRow.name} title={balanceRow.title} type={balanceRow.type} validateCondition={balanceRow.validateCondition} error={errors[balanceRow.name]?.message} info={balanceRow.info} otherAttributes={balanceRow.otherAttributes} />
                <div className="flex items-end gap-[2px]">
                    <InputRow className={priceRow.className} register={register} key={priceRow.name} name={priceRow.name} title={priceRow.title} type={priceRow.type} validateCondition={priceRow.validateCondition} error={errors[priceRow.name]?.message} info={priceRow.info} otherAttributes={priceRow.otherAttributes} />
                    <TextDetail className={'text-neutral-sub-base leading-5'}>&#3647;</TextDetail>
                </div>
            </div>
            <InputRow className={descriptioneRow.className} register={register} key={descriptioneRow.name} name={descriptioneRow.name} title={descriptioneRow.title} type={descriptioneRow.type} validateCondition={descriptioneRow.validateCondition} error={errors[descriptioneRow.name]?.message} info={descriptioneRow.info} otherAttributes={descriptioneRow.otherAttributes} />
        </div>
    )
}
