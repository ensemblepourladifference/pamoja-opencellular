// tslint:disable-next-line no-var-requires
require('app-module-path').addPath(require('path').join(__dirname, '../'))

import { logger } from 'src/logger'
import * as EventSocketMonitor from 'src/features/esl/event-socket-monitor'

logger.info('Starting Event Socket monitor...')
EventSocketMonitor.startJob()
