export default function TestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-serif text-primary mb-4">CSS Test Page</h1>
      <p className="text-lg mb-4">This is a test to see if styles are loading.</p>
      <div className="bg-card p-6 rounded-lg border border-border">
        <p>Background should be dark (#0A0A0A)</p>
        <p>Text should be light (#E0E0E0)</p>
        <p>This card should have a slightly lighter background (#141414)</p>
        <p className="text-primary">This text should be brass/gold (#B8860B)</p>
      </div>
      <div className="mt-4 space-y-2">
        <p>CSS Variables Check:</p>
        <div className="bg-primary text-primary-foreground p-2 rounded">Primary color test</div>
        <div className="bg-secondary text-secondary-foreground p-2 rounded">Secondary color test</div>
        <div className="bg-muted text-muted-foreground p-2 rounded">Muted color test</div>
      </div>
    </div>
  );
}