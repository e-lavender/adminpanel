import { toast } from 'react-toastify'

import { ConfirmationModal } from '@/shared/card-dropdown-menu/confirmation-modal'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { DropdownMenu } from '@/ui/common/dropdown-menu'
import { MenuItem } from '@/ui/common/menu-item'

export const CardDropdownMenu = ({ id }: DropDownMenuType) => {
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const { isOpen: isControlled, onToggle: closeDropdownMenu } = useDisclose(true)

  /*  const deleteUser = () => {
    const postImagesUploadIds = selectedPost.images.map(image => image.uploadId)

    deleteSelectedPost({ postId: selectedPost.id })
      .unwrap()
      .then(() => {
        postImagesUploadIds.forEach(uploadId => {
          deletePostImages({ uploadId })
        })
        closePostCardModal()
        clearPostCardModal()
        toast.success('posts deleted')
      })
      .catch(err => {
        closeDropdownMenu()
        toast.error(err)
      })
  }*/

  return (
    <>
      <DropdownMenu>
        <MenuItem as={'button'} onClick={''} />
      </DropdownMenu>

      <ConfirmationModal
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={'' /*deleteUser*/}
        translation={'deleteUser'}
      />
    </>
  )
}
