/**
 * Utils index file - exports all utility functions
 * Re-exports the vantElementNotice utilities for backward compatibility
 */

import vantElementNotice, { message, alert, confirm } from './vantElementNotice'

// Export individual utilities
export {
  message,
  alert,
  confirm
}

// Re-export the vantElementNotice plugin as the default
export default vantElementNotice 