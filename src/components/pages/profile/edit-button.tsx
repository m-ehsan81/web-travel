import { Icon } from '@iconify/react';

interface EditButtonProps {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditButton({ isEdit, setIsEdit }: EditButtonProps) {
  return (
    <div className="flex justify-end gap-2">
      {!isEdit ? (
        <button
          className="flex items-center text-[#32A6D5]"
          onClick={() => setIsEdit(true)}
          type="button"
        >
          <Icon icon="basil:edit-outline" />
          ویرایش اطلاعات
        </button>
      ) : (
        <>
          <button
            className="flex h-[36px] w-[100px] items-center justify-center rounded-3xl border border-solid border-[#D92D20] text-[#D92D20]"
            onClick={() => setIsEdit(false)}
            type="button"
          >
            انصراف
          </button>
          <button
            className="flex h-[36px] w-[100px] items-center justify-center rounded-3xl bg-[#0FA958] text-white"
            type="submit"
          >
            تایید
          </button>
        </>
      )}
    </div>
  );
}

export default EditButton;
