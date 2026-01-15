import { SetMetadata } from '@nestjs/common';

export const NOTIFY_METADATA = 'NOTIFY_METADATA';

export function Notify(feature: string, event: string) {
  return SetMetadata(NOTIFY_METADATA, { feature, event });
}
