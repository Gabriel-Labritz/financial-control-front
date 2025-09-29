interface HeaderTitleDescProps {
  headerTitle: string;
  headerDescriprion?: string;
}

export default function HeaderTitleDesc({ headerTitle, headerDescriprion}: HeaderTitleDescProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl xl:text-3xl font-semibold tracking-tighter">{headerTitle}</h2>
      <p className="text-sm text-muted-foreground">{headerDescriprion}</p>
    </div>
  )
}