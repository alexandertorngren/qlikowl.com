'use client'
import { Card, CardBody, CircularProgress } from '@nextui-org/react'
import styles from './random-card.module.css'

type RandomCardProps = {
  progress: number
}

export const RandomCard: React.FC<RandomCardProps> = ({ ...props }) => {
  const { progress } = props

  return (
    <Card className={styles.card}>
      <CardBody className={styles.cardBody}>
        <CircularProgress
          aria-label={'progress'}
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            indicator: 'stroke-white/80',
            track: 'stroke-white/20',
            value: 'text-3xl font-semibold',
          }}
          showValueLabel={true}
          strokeWidth={4}
          value={progress}
        />
      </CardBody>
    </Card>
  )
}
