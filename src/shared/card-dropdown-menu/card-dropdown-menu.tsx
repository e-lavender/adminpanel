import { ConfirmationModal } from '@/shared/card-dropdown-menu/confirmation-modal'
import { DropdownMenuType, MENU } from '@/shared/card-dropdown-menu/data'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { DropdownMenu } from '@/ui/common/dropdown-menu'
import { MenuItem } from '@/ui/common/menu-item'

import { Dropdown } from '../../ui/common/dropdown'

export const CardDropdownMenu = () => {
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
      {/* <DropdownMenu>
        {MENU?.map(({ action, icon, label }) => (
          <MenuItem as={'button'} icon={icon} key={action} label={label} onClick={() => {}} />
        ))}
      </DropdownMenu>*/}

      <Dropdown>
        {MENU?.map(({ action, icon, label }) => (
          <MenuItem as={'button'} icon={icon} key={action} label={label} onClick={() => {}} />
        ))}
      </Dropdown>
      <ConfirmationModal
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={() => {} /*deleteUser*/}
        translation={'deleteUser'}
      />
    </>
  )
}
