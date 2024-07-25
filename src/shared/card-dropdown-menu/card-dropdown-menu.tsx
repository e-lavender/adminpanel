import { useCallback, useMemo } from 'react'
import { toast } from 'react-toastify'

import { DropdownMenu } from '@/ui/common/dropdown-menu'
import { MenuItem } from '@/ui/common/menu-item'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { ConfirmationModal } from '@/shared/card-dropdown-menu/confirmation-modal'

export const CardDropdownMenu = ({ id }: DropDownMenuType) => {
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const { isOpen: isControlled, onToggle: closeDropdownMenu } = useDisclose(true)

  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]
  const { changePostCardModalMode, clearPostCardModal, closePostCardModal, selectedPost } =
    usePostCardModal()

  const deleteUser = () => {
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
  }

  return (
    <>
      <DropdownMenu>
        {currentMenuVersion?.map(item => (
          <MenuItem as={'button'} key={`${account}-${item.label}`} {...item} onClick={''} />
        ))}
      </DropdownMenu>

      <ConfirmationModal
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={deleteUser}
        translation={'deleteUser'}
      />
    </>
  )
}
